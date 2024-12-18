配点 : $300$ 点

## 問題文

長さ $N$ の整数の列 $A_1,A_2,\ldots,A_N$ であって以下の条件をすべて満たすものはいくつありますか。

- $0 \leq A_i \leq 9$
- $A_i=0$ なる $i$ が存在する。
- $A_i=9$ なる $i$ が存在する。

ただし、答えはとても大きくなる可能性があるので、$10^9+7$ で割った余りを出力してください。

## 制約

- $1 \leq N \leq 10^6$
- $N$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを$10^9+7$ で割った余りを出力せよ。

```input1
2
```

```output1
2
```

数列$\{0,9\}$,$\{9,0\}$の $2$ つが条件をすべて満たします。

```input2
1
```

```output2
0
```

```input3
869121
```

```output3
2511445
```