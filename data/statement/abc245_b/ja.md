配点 : $200$ 点

## 問題文

長さ $N$ の整数からなる数列 $A=(A_1,\ldots,A_N)$ が与えられます。  

$A_1,\ldots,A_N$ に含まれない最小の非負整数を求めてください。  

## 制約

- $1 \leq N \leq 2000$
- $0 \leq A_i \leq 2000$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
8
0 3 2 6 2 1 0 0
```

```output1
4
```

非負整数は $0,1,2,3,4,\ldots$ と続きます。<br>
$0,1,2,3$ は $A$ に含まれ、$4$ は $A$ に含まれないので、答えは $4$ です。

```input2
3
2000 2000 2000
```

```output2
0
```