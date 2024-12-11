配点 : $400$ 点

## 問題文

正整数 $N$ が与えられます。

$2$ 個以上の (相異なるとは限らない) 正整数 $A_1,A_2,\dots,A_n\ (2 \leq n)$ であって、以下の条件をすべて満たすものが存在するか判定してください。

- $A_1+A_2+\dots+A_n=N$
- $A_1,A_2,\dots,A_n$ の最小公倍数は $N$

$T$ 個のテストケースが与えられるので、それぞれについて答えを求めてください。

## 制約

- $1 \leq T \leq 100$
- $2 \leq N \leq 10^{9}$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

各ケースは以下の形式で与えられます。

> $N$

## 出力

$T$ 行出力してください。$i$ 行目には $i$ 番目のテストケースについて、条件を満たすものが存在する場合は `Yes` を、存在しない場合は `No` を出力してください。

```input1
4
6
4
998244353
367291763
```

```output1
Yes
No
No
Yes
```

$1$ つ目のテストケースについて、例えば $3$ 個の正整数 $(A_1,A_2,A_3)=(1,2,3)$ は、 $A_1+A_2+A_3=1+2+3=6$ であり、 $A_1,A_2,A_3$ の最小公倍数は $6$ であるため条件を満たしています。

$2$ つ目のテストケースについて、条件を満たすような $2$ 個以上の正整数は存在しません。