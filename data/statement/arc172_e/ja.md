配点 : $800$ 点

## 問題文

$n^n$ を $10^9$ で割った余りが $X$ となるような正の整数 $n$ が存在するか判定し、存在する場合は最小のものを求めてください。

$Q$ 個のテストケースが与えられるので、それぞれに対して答えてください。

## 制約

- $1 \leq Q \leq 10000$
- $1 \leq X \leq 10^9 - 1$
- <span style="color:red">$X$ は $2$ の倍数でも $5$ の倍数でもない</span>
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。ただし、$i$ 個目 $(1 \leq i \leq Q)$ のテストケースにおける $X$ の値を $X_i$ とします。

> $Q$
> 
> $X_1$
> 
> $X_2$
> 
> $\vdots$
> 
> $X_Q$

## 出力

$Q$ 行にわたって出力してください。$i$ 行目には、$i$ 個目のテストケースに対する答えを出力してください。ただし、条件を満たす $n$ が存在しない場合は答えを $-1$ とします。

```input1
2
27
311670611
```

```output1
3
11
```

この入力例は $2$ 個のテストケースからなります。

- $1$ 個目：$3^3 = 27$ を $10^9$ で割った余りは $27$ なので、$n = 3$ で条件を満たします。
- $2$ 個目：$11^{11} = 285311670611$ を $10^9$ で割った余りは $311670611$ なので、$n = 11$ で条件を満たします。