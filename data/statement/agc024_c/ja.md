配点 : $700$ 点

## 問題文

長さ $N$ の数列 $X$ があり、最初はすべての要素が $0$ です。$X$ の $i$ 項目を $X_i$ で表すことにします。

長さ $N$ の数列 $A$ が与えられます。$A$ の $i$ 項目は $A_i$ です。
以下の操作を繰り返すことで $X$ を $A$ と等しくすることができるかどうか判定し、できるなら最小の操作回数を求めてください。

- $1\leq i\leq N-1$ なる整数 $i$ を選ぶ。$X_{i+1}$ の値を $X_i$ の値に $1$ を足したもので置き換える。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9(1\leq i\leq N)$
- 入力はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## 出力

操作を繰り返すことで $X$ を $A$ と等しくすることができるなら最小の操作回数を、できないなら $-1$ を出力せよ。

```input1
4
0
1
1
2
```

```output1
3
```

次のようにして、$X$ を $A$ と等しくすることができます。

- $i=2$ に対して操作する。$X$ は $(0,0,1,0)$ となる。
- $i=1$ に対して操作する。$X$ は $(0,1,1,0)$ となる。
- $i=3$ に対して操作する。$X$ は $(0,1,1,2)$ となる。

```input2
3
1
2
1
```

```output2
-1
```

```input3
9
0
1
1
0
1
2
2
1
2
```

```output3
8
```