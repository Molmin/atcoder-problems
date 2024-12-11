配点 : $700$ 点

## 問題文

長さ $2^N$ の整数列 $A_0, A_1, ..., A_{2^N-1}$ があります。（添字が $0$ から始まることに注意）

$1 \leq K \leq 2^N-1$ を満たすすべての整数 $K$ について、次の問題を解いてください。

- $i,j$ を整数とする。$0 \leq i &lt; j \leq 2^N-1$, $(i$ $or$ $j) \leq K$ のとき、$A_i + A_j$ の最大値を求めよ。
ただしここで $or$ はビットごとの論理和を表す。

## 制約

- $1 \leq N \leq 18$
- $1 \leq A_i \leq 10^9$
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_0$ $A_1$ $...$ $A_{2^N-1}$

## 出力

$2^N-1$ 行出力せよ。
$i$ 行目には、$K=i$ のときの上記の問題の答えを出力せよ。

```input1
2
1 2 3 1
```

```output1
3
4
5
```

$K=1$ のとき、$i,j$ としてあり得る組合せは $(i,j)=(0,1)$ のみなので、答えは $A_0+A_1=1+2=3$ となります。

$K=2$ のとき、$i,j$ としてあり得る組合せは $(i,j)=(0,1),(0,2)$ です。
$(i,j)=(0,2)$ のとき、$A_i+A_j=1+3=4$ となり、これが最大なので、答えは $4$ です。

$K=3$ のとき、$i,j$ としてあり得る組合せは $(i,j)=(0,1),(0,2),(0,3),(1,2),(1,3),(2,3)$ です。
$(i,j)=(1,2)$ のとき、$A_i+A_j=2+3=5$ となり、これが最大なので、答えは $5$ です。

```input2
3
10 71 84 33 6 47 23 25
```

```output2
81
94
155
155
155
155
155
```

```input3
4
75 26 45 72 81 47 97 97 2 2 25 82 84 17 56 32
```

```output3
101
120
147
156
156
178
194
194
194
194
194
194
194
194
194
```