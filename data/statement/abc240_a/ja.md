配点 : $100$ 点

## 問題文

下の画像で示す図において、$a$ 番の点と $b$ 番の点が線で直接結ばれているかを答えてください。

![](https://img.atcoder.jp/ghi/04f0c8fb8aabbbb4db7aa5d6f8557de3.png)

## 制約

- $1 \leq a \lt b \leq 10$
- $a, b$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$

## 出力

$a$ 番の点と $b$ 番の点が線で直接結ばれている場合は `Yes` を出力し、結ばれていない場合は `No` を出力せよ。<br>
ジャッジは英大文字と英小文字を厳密に区別することに注意せよ。

```input1
4 5
```

```output1
Yes
```

問題文で示した図において、$4$ 番の点と $5$ 番の点は線で直接結ばれています。
よって、`Yes` を出力します。

```input2
3 5
```

```output2
No
```

問題文で示した図において、$3$ 番の点と $5$ 番の点は線で直接結ばれていません。
よって、`No` を出力します。

```input3
1 10
```

```output3
Yes
```