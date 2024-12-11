配点 : $1200$ 点

## 問題文

次の条件を満たす数列の組 $(A_0,A_1,...,A_N)$ としてありうるものの個数を $M$ で割ったあまりを求めてください。

- 全ての $i(0\leq i\leq N)$ に対し、$A_i$ は $1$ 以上 $K$ 以下の整数からなる長さ $i$ の数列である
- 全ての $i(1\leq i\leq N)$ に対し、$A_{i-1}$ は $A_i$ の部分列である。すなわち、ある $1\leq x_i\leq i$ が存在し、$A_i$ の $x_i$ 文字目を取り除いてできる数列が $A_{i-1}$ に一致する
- 全ての $i(1\leq i\leq N)$ に対し、$A_i$ は辞書順で $A_{i-1}$ より大きい

## 制約

- $1 \leq N,K \leq 300$
- $2 \leq M \leq 10^9$
- $N,K,M$ は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $M$

## 出力

数列の組 $(A_0,A_1,...,A_N)$ としてありうるものの個数を $M$ で割ったあまりを出力せよ。

```input1
2 2 100
```

```output1
5
```

以下の $5$ つの組が条件を満たします。

- $(),(1),(1,1)$
- $(),(1),(1,2)$
- $(),(1),(2,1)$
- $(),(2),(2,1)$
- $(),(2),(2,2)$

```input2
4 3 999999999
```

```output2
358
```

```input3
150 150 998244353
```

```output3
186248260
```