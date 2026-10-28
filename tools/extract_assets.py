import json, base64, zlib, io, struct, sys, os
from PIL import Image
m = json.load(open('/home/claude/port/work/movie.json'))
OUT = '/home/claude/port/out/assets'
b = lambda x: base64.b64decode(x['$b64'])
stats = {'img':0,'snd':0,'fail':[]}
index = {'images':{}, 'sounds':{}}
for t in m['tags']:
    if t['type'] == 5:
        i = t['id']; mt = t['mediaType']; d = b(t['data'])
        try:
            if mt == 'image/jpeg' or mt == 'image/x-swf-partial-jpeg':
                # strip erroneous FFD9FFD8 prefix
                if d[:4] == b'\xff\xd9\xff\xd8': d = d[4:]
                im = Image.open(io.BytesIO(d)).convert('RGBA')
            elif mt == 'image/x-swf-jpeg3':
                jl = struct.unpack('<I', d[:4])[0]
                jpg = d[4:4+jl]
                if jpg[:4] == b'\xff\xd9\xff\xd8': jpg = jpg[4:]
                im = Image.open(io.BytesIO(jpg)).convert('RGBA')
                alpha = zlib.decompress(d[4+jl:])
                w, h = im.size
                if len(alpha) >= w*h:
                    im.putalpha(Image.frombytes('L', (w,h), alpha[:w*h]))
            elif mt == 'image/x-swf-lossless2' or mt == 'image/x-swf-lossless1':
                fmt = d[0]; w, h = struct.unpack('<HH', d[1:5])
                off = 5
                if fmt == 3:
                    n = d[5] + 1; off = 6
                raw = zlib.decompress(d[off:])
                if fmt == 3:
                    bpp = 4 if mt.endswith('2') else 3
                    pal = [raw[k*bpp:(k+1)*bpp] for k in range(n)]
                    stride = (w + 3) & ~3
                    pix = bytearray()
                    for y in range(h):
                        row = raw[n*bpp + y*stride : n*bpp + y*stride + w]
                        for idx in row:
                            p = pal[idx] if idx < n else b'\0\0\0\0'
                            if bpp == 4: pix += bytes([p[0],p[1],p[2],p[3]])
                            else: pix += bytes([p[0],p[1],p[2],255])
                    im = Image.frombytes('RGBA', (w,h), bytes(pix))
                elif fmt == 5:
                    # ARGB, premultiplied for lossless2
                    pix = bytearray(w*h*4)
                    for k in range(w*h):
                        a, r, g, bb = raw[k*4:k*4+4]
                        if mt.endswith('2') and a not in (0,255):
                            r = min(255, r*255//a); g = min(255, g*255//a); bb = min(255, bb*255//a)
                        pix[k*4:k*4+4] = bytes([r,g,bb,a if mt.endswith('2') else 255])
                    im = Image.frombytes('RGBA', (w,h), bytes(pix))
                else:
                    raise ValueError('unsupported lossless format %d' % fmt)
            else:
                raise ValueError('unknown media type ' + mt)
            im.save(f'{OUT}/img/{i}.png', optimize=False)
            index['images'][i] = {'w': im.size[0], 'h': im.size[1]}
            stats['img'] += 1
        except Exception as e:
            stats['fail'].append((i, mt, repr(e)))
    elif t['type'] == 23:
        i = t['id']; d = b(t['data'])
        if t['format'] == 2:
            open(f'{OUT}/snd/{i}.mp3', 'wb').write(d[2:])  # skip 2-byte latency seek
            index['sounds'][i] = {'rate': t['soundRate'], 'samples': t['sampleCount']}
            stats['snd'] += 1
        else:
            stats['fail'].append((i, 'sound', t['format']))
json.dump(index, open(f'{OUT}/index.json','w'))
print(stats['img'], 'images,', stats['snd'], 'sounds, failures:', stats['fail'][:10], len(stats['fail']))
