配点 : $900$ 点

## 問題文

長さ $N$ の整数列 $(A_1,\dots,A_N)$ が与えられます。この整数列は、各 $i=1,\dots,N$ について、$0\le A_i &lt; i$ を満たします。
次の条件を満たす $(1,\dots,N)$ の順列 $(P_1,\dots,P_N)$ の数を $998244353$ で割ったあまりを求めてください。

- $i=1,\dots,N$ について、-   - $A_i &amp;lt; j &amp;lt; i$ であるすべての整数 $j$ について、$P_j &amp;gt; P_i$
-   - $A_i &amp;gt; 0$ ならば $P_{A_i} &amp;lt; P_i$

ただし、この問題の入力で与えられる $(A_1,\dots,A_N)$ について、条件を満たす順列が存在することが保証されます。

## 制約

- $1\le N\le 3\times 10^5$
- $0\le A_i \lt i$
- $A_1,\dots,A_N$ について、問題文中の条件を満たすような順列が存在する
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

条件を満たす順列の数を $998244353$ で割ったあまりを出力せよ。

```input1
4
0 1 0 3
```

```output1
3
```

$(2, 3, 1, 4), (2, 4, 1, 3), (3, 4, 1, 2)$ の $3$ つです。

```input2
22
0 1 2 2 2 2 2 2 1 9 9 9 9 0 14 15 15 15 14 19 19 19
```

```output2
353820794
```

$2350309500$ を $998244353$ で割ったあまりである、 $353820794$ が答えです。