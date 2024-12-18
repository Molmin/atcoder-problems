配点 : $500$ 点

## 問題文

$2$ 次元平面の原点に高橋君がいます。<br>
高橋君はこれから、ワープを $N$ 回繰り返します。各ワープでは、以下の $3$ つのうちいずれか $1$ つを行います。

- 現在いる座標 $(x,y)$ から $(x+A,y+B)$ に移動する
- 現在いる座標 $(x,y)$ から $(x+C,y+D)$ に移動する
- 現在いる座標 $(x,y)$ から $(x+E,y+F)$ に移動する

平面上の $M$ 箇所 $(X_1,Y_1),\ldots,(X_M,Y_M)$ には障害物があり、これらの座標に移動することはできません。

$N$ 回のワープによる移動経路として考えられるものは何通りですか？　$998244353$ で割ったあまりを求めてください。

## 制約

- $1 \leq N \leq 300$
- $0 \leq M \leq 10^5$
- $-10^9 \leq A,B,C,D,E,F \leq 10^9$
- $(A,B),(C,D),(E,F)$ は相異なる
- $-10^9 \leq X_i,Y_i \leq 10^9$
- $(X_i,Y_i)\neq(0,0)$
- $(X_i,Y_i)$ は相異なる
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A$ $B$ $C$ $D$ $E$ $F$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## 出力

答えを出力せよ。  

```input1
2 2
1 1 1 2 1 3
1 2
2 2
```

```output1
5
```

以下の $5$ 通りが考えられます。

- $(0,0)\to(1,1)\to(2,3)$
- $(0,0)\to(1,1)\to(2,4)$
- $(0,0)\to(1,3)\to(2,4)$
- $(0,0)\to(1,3)\to(2,5)$
- $(0,0)\to(1,3)\to(2,6)$

```input2
10 3
-1000000000 -1000000000 1000000000 1000000000 -1000000000 1000000000
-1000000000 -1000000000
1000000000 1000000000
-1000000000 1000000000
```

```output2
0
```

```input3
300 0
0 0 1 0 0 1
```

```output3
292172978
```