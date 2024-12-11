配点 : $500$ 点

## 問題文

$1$ 以上 $M$ 以下の整数からなる長さ $M$ の数列 $(X_1,X_2,\dots ,X_M)$ が与えられます.

$1$ 以上 $M$ 以下の整数からなる長さ $N$ の数列 $A=(A_1,A_2,\dots ,A_N)$ であって, 以下の条件を満たすものの個数を $998244353$ で割ったあまりを求めてください.

- $B=1,2,\dots ,M$ について, $A$ の中で異なる位置にある $2$ つの $B$ の間(両端を含む)には $X_B$ が存在する.

より正確には, $B=1,2,\dots ,M$ について次の条件が成り立つことを言います.

- $1\le l\lt r\le N$ かつ $A_l=A_r=B$ を満たすすべての整数組 $(l,r)$ に対して, ある整数 $m\ (l\le m\le r)$ が存在して, $A_m=X_B$ が成り立つ.

## 制約

- $1\leq M\leq 10$
- $1 \leq N \leq 10^4$
- $1 \leq X_i \leq M$
- 入力される値はすべて整数．

## 入力

入力は以下の形式で標準入力から与えられる．

> $M$ $N$
> 
> $X_1$ $X_2$ $\cdots$ $X_M$

## 出力

答えを出力せよ.

```input1
3 4
2 1 2
```

```output1
14
```

条件を満たす $A$ としては例えば次のものが挙げられます.

- $(1,3,2,3)$
- $(2,1,2,1)$
- $(3,2,1,3)$

逆に, 次のものは条件を満たしません.

- $(1,3,1,3)$-   - $3$ の間に $X_3=2$ がありません
- $(2,2,1,3)$-   - $2$ の間に $X_2=1$ がありません

```input2
4 8
1 2 3 4
```

```output2
65536
```

$1$ 以上 $4$ 以下の整数からなる長さ $8$ の数列はすべて条件を満たします.

$X_B=B$ のとき, 異なる位置にある $B$ の間には必ず $B$ が存在することに注意してください.

```input3
4 9
2 3 4 1
```

```output3
628
```