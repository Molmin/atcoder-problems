配点 : $300$ 点

## 問題文

正の整数 $N$ が与えられます。

$A\leq B\leq C$ かつ $ABC\leq N$ であるような正の整数の組 $(A,B,C)$ の個数を求めてください。

なお、制約の条件下で答えは $2^{63}$ 未満であることが保証されます。

## 制約

- $1 \leq N \leq 10^{11}$
- $N$ は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを出力せよ。

```input1
4
```

```output1
5
```

条件を満たす組は $(1,1,1),(1,1,2),(1,1,3),(1,1,4),(1,2,2)$ の $5$ つです。  

```input2
100
```

```output2
323
```

```input3
100000000000
```

```output3
5745290566750
```