配点 : $800$ 点

## 問題文

$(1,\ldots,N)$ の順列 $P=(P_1,\ldots,P_N)$ に対して，以下の操作を一度行うことにより得られる順列を $P'=(P'_1,\ldots,P'_N)$ とします．

- $i=1,2,\ldots,N-1$ の順に，$P_i &gt; P_{i+1}$ ならば $P_i$ と $P_{i+1}$ を入れ替える．

長さ $N$ の数列 $Q=(Q_1,\ldots,Q_N)$ が与えられます．
$Q_i$ は $-1$ または $1$ 以上 $N$ 以下の整数 です．

全ての $i$ について $Q_i\neq -1$ ならば $Q_i=P'_i$ を満たすような $(1,\ldots,N)$ の順列 $P$ の個数を $998244353$ で割ったあまりを求めてください．

## 制約

- 入力される数値は全て整数
- $2 \leq N \leq 5000$
- $Q_i$ は $-1$ または $1$ 以上 $N$ 以下の整数
- $Q$ に $1,2,\ldots,N$ が含まれる個数はそれぞれ $1$ 個以下

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ 
> 
> $Q_1$ $\ldots$ $Q_N$

## 出力

答えを出力せよ．

```input1
4
-1 -1 2 4
```

```output1
6
```

例えば $P=(3,1,4,2)$ は条件を満たします．これは以下の操作の挙動から確認できます．

- $i=1$ のとき，$P_1 &gt; P_2$ なので $P_1$ と $P_2$ を入れ替え，$P=(1,3,4,2)$ となる．
- $i=2$ のとき，$P_2 &lt; P_3$ なので 何もしない．
- $i=3$ のとき，$P_3 &gt; P_4$ なので $P_3$ と $P_4$ を入れ替え，$P=(1,3,2,4)$ となる．
- 以上より $P'=(1,3,2,4)$ となり，$P'_3=2,P'_4=4$ を満たす．

条件を満たす $P$ は以下の $6$ 個です．

- $(1,3,4,2)$
- $(1,4,3,2)$
- $(3,1,4,2)$
- $(3,4,1,2)$
- $(4,1,3,2)$
- $(4,3,1,2)$

```input2
6
-1 -1 -1 -1 2 -1
```

```output2
120
```

```input3
15
-1 -1 -1 -1 -1 4 -1 -1 -1 -1 7 -1 -1 -1 -1
```

```output3
237554682
```

個数を $998244353$ で割ったあまりを求めることに注意してください．