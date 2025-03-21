配点 : $600$ 点

## 問題文

正の整数 $N$ が与えられます。整数列 $A = (A_1, \ldots, A_K)$ であって以下の条件を満たすものを考えます：

- $\sum_{i=1}^K A_i = N$
- 各 $A_i$ は正の整数で、$10$ 進法表記したときどの桁の値も $1, 2, 3$ のいずれかである。

そのような $A$ の要素数 $K$ として考えられる最小の値を答えてください。

一つの入力ファイルにつき、$T$ 個のテストケースに答えてください。

## 制約

- $1\leq T\leq 1000$
- $1\leq N\leq 10^{18}$

## 入力

入力は以下の形式で標準入力から与えられます。

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

各テストケースは以下の形式で与えられます。

> $N$

## 出力

答えを出力してください。

```input1
5
456
10000
123
314
91
```

```output1
2
4
1
2
4
```

それぞれの $N$ に対して、最適な $A$ の一例は以下の通りです：

- $N = 456$ の場合：$A = (133, 323)$
- $N = 10000$ の場合：$A = (323, 3132, 3232, 3313)$
- $N = 123$ の場合：$A = (123)$
- $N = 314$ の場合：$A = (312,2)$
- $N = 91$ の場合：$A = (22,23,23,23)$