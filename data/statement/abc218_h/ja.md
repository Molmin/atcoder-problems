配点 : $600$ 点

## 問題文

$1$ から $N$ の番号がついた $N$ 個のランプが一列に並べられています。あなたはこのうち $R$ 個を赤く、$N-R$ 個を青く光らせようとしています。

各 $i=1,\ldots,N-1$ について、ランプ $i$ とランプ $i+1$ が異なる色で光っているとき、あなたは $A_i$ の報酬を得ます。

ランプの色を適切に定めたときに得られる報酬の合計の最大値を求めてください。

## 制約

- $2 \leq N \leq 2\times 10^5$
- $1 \leq R \leq N-1$
- $1 \leq A_i \leq 10^9$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $R$
> 
> $A_1$ $A_2$ $\ldots$ $A_{N-1}$

## 出力

答えを出力せよ。  

```input1
6 2
3 1 4 1 5
```

```output1
11
```

ランプ $3,5$ を赤く、ランプ $1,2,4,6$ を青くすることで、$A_2+A_3+A_4+A_5=11$ の報酬を得ます。

これ以上の報酬を得ることはできないため、答えは $11$ です。

```input2
7 6
2 7 1 8 2 8
```

```output2
10
```

ランプ $1,2,3,4,5,7$ を赤く、ランプ $6$ を青くすることで、$A_5+A_6=10$ の報酬を得ます。

```input3
11 7
12345 678 90123 45678901 234567 89012 3456 78901 23456 7890
```

```output3
46207983
```