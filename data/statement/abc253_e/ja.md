配点 : $500$ 点

## 問題文

長さ $N$ の整数からなる数列 $A=(A_1,\ldots,A_N)$ であって、以下の条件を全て満たすものは何通りありますか？

- <p>$1\le A_i \le M$ $(1 \le i \le N)$</p>
- <p>$|A_i - A_{i+1}| \geq K$ $(1 \le i \le N - 1)$  </p>

ただし、答えは非常に大きくなることがあるので、答えを $998244353$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 1000$
- $1 \leq M \leq 5000$
- $0 \leq K \leq M-1$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$

## 出力

答えを $998244353$ で割った余りを出力せよ。

```input1
2 3 1
```

```output1
6
```

条件を満たす数列は以下の $6$ つです。

- $(1,2)$
- $(1,3)$
- $(2,1)$
- $(2,3)$
- $(3,1)$
- $(3,2)$

```input2
3 3 2
```

```output2
2
```

条件を満たす数列は以下の $2$ つです。

- $(1,3,1)$
- $(3,1,3)$

```input3
100 1000 500
```

```output3
657064711
```

答えを $998244353$ で割った余りを出力してください。