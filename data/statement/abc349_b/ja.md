配点 : $200$ 点

## 問題文

英小文字からなる文字列 $S$ が**良い文字列**であるとは、すべての $1$ 以上の整数 $i$ について次の性質が成り立つことであるとします。

- $S$ にちょうど $i$ 回現れる文字はちょうど $0$ 種類またはちょうど $2$ 種類ある

文字列 $S$ が与えられるので、 $S$ が良い文字列か判定してください。

## 制約

- $S$ は英小文字からなる長さ $1$ 以上 $100$ 以下の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S$ が良い文字列ならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
commencement
```

```output1
Yes
```

文字列 `commencement` にちょうど $i$ 回現れる文字の種類数は以下のとおりです。

- $i=1$: `o`, `t` の $2$ 種類
- $i=2$: `c`, `n` の $2$ 種類
- $i=3$: `e`, `m` の $2$ 種類
- $i\geq 4$: $0$ 種類

よって、`commencement` は良い文字列の条件を満たします。

```input2
banana
```

```output2
No
```

文字列 `banana` にちょうど $1$ 回現れる文字は `b` の $1$ 種類だけであり、良い文字列の条件を満たしません。

```input3
ab
```

```output3
Yes
```