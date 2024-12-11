配点 : $200$ 点

## 問題文

高橋商店では $N$ 個の商品が売られています。$i\, (1 \leq i \leq N)$ 番目の商品の定価は $A_i$ 円です。<br>
今日はセールが行われており、偶数番目の商品は定価の $1$ 円引きの値段で買うことができます。奇数番目の商品は定価で売られています。<br>
あなたの所持金は $X$ 円です。これら $N$ 個の商品を全て買うことができますか？

## 制約

- $1 \leq N \leq 100$
- $1 \leq X \leq 10000$
- $1 \leq A_i \leq 100$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

$N$ 個の商品を全て買うことができるなら `Yes`、できないなら `No` と出力せよ。

```input1
2 3
1 3
```

```output1
Yes
```

$1$ 番目の商品は $1$ 円、$2$ 番目の商品は定価より $1$ 円引きの $2$ 円で買うことができます。あなたの所持金は $3$ 円なので、ちょうどの金額で $2$ 個の商品を全て買うことができます。

```input2
4 10
3 3 4 4
```

```output2
No
```

$4$ 個の商品はそれぞれ $3$ 円、$2$ 円、$4$ 円、$3$ 円で買うことができます。$4$ 個の商品を全て買うためには $12$ 円必要ですが、あなたの所持金は $10$ 円なので全て買うことはできません。

```input3
8 30
3 1 4 1 5 9 2 6
```

```output3
Yes
```