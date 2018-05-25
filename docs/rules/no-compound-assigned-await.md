# no-compound-assigned-await

```js
let x = 0;
async function test() {
	x += await 2;
	console.log(x)
}
test();
x+=1;
console.log(x)
```

Outputs 1, then 2, as the line `x+= await 2`, determines value of x synchronously. This is usually unwanted behaviour, and if it is intended, that intent should be made clear.

Examples of **incorrect** code for this rule:

```js

x += await y

```

Examples of **correct** code for this rule:

```js

x = x + await y

x = await (y+x)

```

## Further Reading

* [Jake Archibald's explanation of the example code](https://www.youtube.com/watch?v=bfxglBVSNDI).
