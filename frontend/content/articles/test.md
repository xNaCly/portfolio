---
title: Testing all features of md
description: This article showcases all features of markdown
author: xnacly
timetoread: 10 min
writtenat: October 15, 2021
nottags: github#nuxt#markdown
---

## Text styles, lists

_italicized text_

> blockquote

**bold text**

~~The world is flat.~~

1. First item
2. Second item
3. Third item[^5]

- First item
- Second item
- Third item

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Code, link, image, table

`code`

---

[title](https://www.example.com)

![alt text](https://i.picsum.photos/id/305/200/300.jpg?hmac=qqxVDT5GPIxyVNSo9Y_9u_qZSwXU4Cy94gp7VAMVRIw)

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Codeblocks

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```js
function test(param) {
  console.log(param);
}
["A", "B", "C"]
  .map(x => x.toLowerCase())
  .filter(y => typeof y === "string")
  .forEach(e => console.log(e));
```

```py
def test(param):
    print(param)
```

```bash
files=`ls -l *.md | awk '{ print $9 }'`
for file in $files
do
    cp $file ../copy
done
echo "copied files"
```

## Footnotes

Here's a sentence with a footnote. [^1]
Here's a sentence with a footnote. [^2]
Here's a sentence with a footnote. [^3]
Here's a sentence with a footnote. [^4]

[^1]: This is the footnote.
[^2]: This is the footnote.
[^3]: This is the footnote.
[^4]: This is the footnote.
[^5]: This is the footnote.
