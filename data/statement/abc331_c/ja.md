配点 : $300$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,\ldots,A_N)$ が与えられます。

$i=1,\ldots,N$ のそれぞれについて次の問題を解いてください。

問題：$A$ の要素のうち $A_i$ より大きな要素全ての和を求めよ。

## 制約

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^6$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

各 $1\leq k\leq N$ について、$i=k$ に対する問題の答えを $B_k$ とする。$B_1,\ldots,B_N$ をこの順に空白区切りで出力せよ。

```input1
5
1 4 1 4 2
```

```output1
10 0 10 0 8
```

- $i=1$ のとき $A_1=1$ より大きな要素の和は $4+4+2=10$
- $i=2$ のとき $A_2=4$ より大きな要素の和は $0$
- $i=3$ のとき $A_3=1$ より大きな要素の和は $4+4+2=10$
- $i=4$ のとき $A_4=4$ より大きな要素の和は $0$
- $i=5$ のとき $A_5=2$ より大きな要素の和は $4+4=8$

```input2
10
31 42 59 26 53 58 97 93 23 54
```

```output2
456 414 190 487 361 249 0 97 513 307
```

```input3
50
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```output3
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```