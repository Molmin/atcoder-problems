配点 : $475$ 点

## 問題文

Atcoder 国には $1$ から $N$ の番号がついた $N$ 個の街と、$1$ から $M$ の番号がついた $M$ 本の電車が走っています。<br>
電車 $i$ は街 $A_i$ を時刻 $S_i$ に発車し、街 $B_i$ に時刻 $T_i$ に到着します。

正の整数 $X_1$ が与えられるので、$0$ 以上の整数 $X_2,\ldots,X_M$ を以下の条件を満たすように定める方法のうち、$X_2+\ldots+X_M$ が最小になるものを求めてください。

- 条件：$1 \leq i,j \leq M$ を満たす全ての組 $(i,j)$ について、「$B_i=A_j$ かつ $T_i \leq S_j$」ならば「$T_i+X_i \leq S_j+X_j$」-   - すなわち、もともと乗り換え可能だった電車の組は、各電車 $i$ の発車時刻・到着時刻を $X_i$ 遅らせても乗り換え可能である

なお、$X_2+\ldots+X_M$ が最小になるような $X_2,\ldots,X_M$ の定め方は一意であることが証明できます。

## 制約

- $2 \leq N \leq 2\times 10^5$
- $2 \leq M \leq 2\times 10^5$
- $1 \leq A_i,B_i \leq N$
- $A_i \neq B_i$
- $0 \leq S_i &lt; T_i \leq 10^9$
- $1 \leq X_1 \leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $X_1$
> 
> $A_1$ $B_1$ $S_1$ $T_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $S_M$ $T_M$

## 出力

条件を満たし、和を最小化するような $X_2,\ldots,X_M$ を、この順に空白区切りで出力せよ。

```input1
3 6 15
1 2 10 20
1 2 20 30
2 3 25 40
2 3 35 50
3 1 15 30
3 1 45 60
```

```output1
0 10 0 0 5
```

街 $1$ から $2$ へ行く電車 $1$ の到着が $15$ 遅れ、時刻 $35$ になりました。<br>
街 $2$ での電車 $1$ から $3$ への乗り換えのため、電車 $3$ の発車時刻を $10$ 遅らせて、時刻 $35$ 発 時刻 $50$ 着とします。<br>
さらに街 $3$ での電車 $3$ から $6$ への乗り換えのため、電車 $6$ の発車時刻を $5$ 遅らせて、時刻 $50$ 発とします。<br>
他の電車は発車を遅らせることなく、元々乗り換え可能だった電車の間を乗り換えることができるため、$(X_2,X_3,X_4,X_5,X_6)=(0,10,0,0,5)$ は条件を満たします。<br>
また、条件を満たすもののうち和がこれより小さいものは存在しないため、これが答えとなります。

```input2
10 9 100
1 10 0 1
10 2 1 100
10 3 1 100
10 4 1 100
10 5 1 100
10 6 1 100
10 7 1 100
10 8 1 100
10 9 1 100
```

```output2
100 100 100 100 100 100 100 100
```

```input3
4 4 10
1 2 0 1
1 2 0 10
2 3 100 200
2 4 100 200
```

```output3
0 0 0
```