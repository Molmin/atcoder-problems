配点 : $300$ 点

## 問題文

$6$ 個の整数 $h_1, h_2, h_3, w_1, w_2, w_3$ が与えられます。<br>
縦横 $3 \times 3$ のマス目に、以下の条件をすべて満たすように各マスに**正の**整数を $1$ つずつ書きこむことを考えます。

- $i=1,2,3$ について、上から $i$ 行目に書きこんだ数の和が $h_i$ になる。
- $j=1,2,3$ について、左から $j$ 列目に書きこんだ数の和が $w_j$ になる。

例えば $(h_1, h_2, h_3) = (5, 13, 10), (w_1, w_2, w_3) = (6, 13, 9)$ のとき、以下の $3$ 通りの書きこみ方はすべて条件を満たしています。(条件を満たす書きこみ方は他にもあります)

![image](https://img.atcoder.jp/ghi/42e99457e52ca5e6d335b2dbda72d9ab.png)

さて、条件を満たす書きこみ方は全部で何通り存在しますか？

## 制約

- $3 \leq h_1, h_2, h_3, w_1, w_2, w_3 \leq 30$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $h_1$ $h_2$ $h_3$ $w_1$ $w_2$ $w_3$

## 出力

条件を満たす書きこみ方が何通りあるかを出力せよ。

```input1
3 4 6 3 3 7
```

```output1
1
```

条件を満たす数の書きこみ方は次の $1$ 通りのみです。よって $1$ を出力します。

![image2](https://img.atcoder.jp/ghi/d53ea47321716fe799854c72b7beff3c.jpg)

```input2
3 4 5 6 7 8
```

```output2
0
```

条件を満たす書きこみ方が存在しないこともあります。

```input3
5 13 10 6 13 9
```

```output3
120
```

```input4
20 25 30 22 29 24
```

```output4
30613
```