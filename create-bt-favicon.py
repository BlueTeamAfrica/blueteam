#!/usr/bin/env python3
try:
    from PIL import Image, ImageDraw, ImageFont
    import os
    
    # Create 512x512 image with blue background
    img = Image.new('RGB', (512, 512), color='#2563EB')
    draw = ImageDraw.Draw(img)
    
    # Try to use a bold font, fallback to default
    try:
        # Try system fonts
        font_paths = [
            '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
            '/System/Library/Fonts/Helvetica.ttc',
            '/Library/Fonts/Arial Bold.ttf',
        ]
        font = None
        for path in font_paths:
            if os.path.exists(path):
                try:
                    font = ImageFont.truetype(path, 280)
                    break
                except:
                    continue
        if font is None:
            font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()
    
    # Draw BT text in white, centered
    text = 'BT'
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (512 - text_width) // 2
    y = (512 - text_height) // 2 - 20  # Slightly adjust vertical centering
    
    draw.text((x, y), text, fill='white', font=font)
    
    # Save as PNG
    img.save('app/icon.png')
    print('✓ BT favicon created successfully')
except ImportError:
    print('PIL/Pillow not available')
    exit(1)
except Exception as e:
    print(f'Error: {e}')
    exit(1)

