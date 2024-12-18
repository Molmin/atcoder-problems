配点 : $100$ 点

## 問題文

長さ $N$ の整数列の組 $A=(A_1, A_2, \dots, A_N), B=(B_1, B_2, \dots, B_N)$ があります．最初は全ての $i = 1, 2, \dots, N$ に対して $A_i=B_i=0$ です．  

あなたは $A, B$ に対して次の操作を $M$ 回行います．

- **操作**：整数 $i, j\ (1 \le i, j \le N)$ を選び， $A_i$ と $B_j$ の値を $1$ ずつ増やす．

ただし， $M$ 回の操作のうち $i=j$ であるのは**ちょうど** $X$ 回である必要があります．

$M$ 回の操作後の $A, B$ の組としてありうるものの個数を $998244353$ で割った余りを求めてください．

## 制約

- $2 \leq N \leq 3000$
- $0 \leq X \leq M \le 3000$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N \ M \ X$

## 出力

$M$ 回の操作後の $A, B$ の組としてありうるものの個数を $998244353$ で割った余りを出力せよ．

```input1
3 1 1
```

```output1
3
```

次の $3$ 個です．

- $A=(1,0,0), \ B=(1,0,0)$
- $A=(0,1,0), \ B=(0,1,0)$
- $A=(0,0,1), \ B=(0,0,1)$

```input2
3 1 0
```

```output2
6
```

次の $6$ 個です．

- $A=(1,0,0), \ B=(0,1,0)$
- $A=(1,0,0), \ B=(0,0,1)$
- $A=(0,1,0), \ B=(1,0,0)$
- $A=(0,1,0), \ B=(0,0,1)$
- $A=(0,0,1), \ B=(1,0,0)$
- $A=(0,0,1), \ B=(0,1,0)$

```input3
4 4 2
```

```output3
643
```

例えば次のような $A, B$ の組がありえます．

- $A=(1,1,1,1), \ B=(1,1,1,1)$
- $A=(1,0,0,3), \ B=(0,1,0,3)$

```input4
314 1592 653
```

```output4
755768689
```