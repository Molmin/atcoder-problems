配点 : $100$ 点

## 問題文

下の画像で示す図において、$a$ 番の点と $b$ 番の点が線で直接結ばれているかを答えてください。

![](https://img.atcoder.jp/abc285/080021a4ef4143f82d024ce3b4cfd00f.png)

## 制約

- $1 \leq a \lt b \leq 15$
- $a,b$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$

## 出力

$a$ 番の点と $b$ 番の点が線で直接結ばれているなら `Yes`、結ばれていないなら `No` を出力せよ。

```input1
1 2
```

```output1
Yes
```

問題文で示した図において、$1$ 番の点と $2$ 番の点は線で直接結ばれています。 よって、`Yes` を出力します。

```input2
2 8
```

```output2
No
```

問題文で示した図において、$2$ 番の点と $8$ 番の点は線で直接結ばれていません。 よって、`No` を出力します。

```input3
14 15
```

```output3
No
```