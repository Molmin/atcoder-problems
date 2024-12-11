配点 : $350$ 点

## 問題文

$1$ から $N$ の番号がついた $N$ 人のユーザが利用している SNS があります。

この SNS では $2$ 人のユーザが互いに**友達**になれる機能があります。<br>
友達関係は双方向的です。すなわち、ユーザ X がユーザ Y の友達であるならば、必ずユーザ Y はユーザ X の友達です。

現在 SNS 上には $M$ 組の友達関係が存在し、$i$ 組目の友達関係はユーザ $A_i$ とユーザ $B_i$ からなります。

以下の操作を行える最大の回数を求めてください。

- 操作：3 人のユーザ X, Y, Z であって、X と Y は友達、Y と Z は友達であり、X と Z は友達でないようなものを選ぶ。X と Z を友達にする。

## 制約

- $2 \leq N \leq 2\times 10^5$
- $0 \leq M \leq 2\times 10^5$
- $1\leq A_i &lt; B_i \leq N$
- $(A_i,B_i)$ は相異なる
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## 出力

答えを出力せよ。  

```input1
4 3
1 2
2 3
1 4
```

```output1
3
```

次のようにして「友達の友達と新たに友達になる」という操作は $3$ 回行えます。

- ユーザ $1$ が友達(ユーザ $2$)の友達であるユーザ $3$ と新たに友達になる
- ユーザ $3$ が友達(ユーザ $1$)の友達であるユーザ $4$ と新たに友達になる
- ユーザ $2$ が友達(ユーザ $1$)の友達であるユーザ $4$ と新たに友達になる

$4$ 回以上行うことはできません。

```input2
3 0
```

```output2
0
```

もともと友達関係が存在しないとき、新たな友達関係は発生しません。

```input3
10 8
1 2
2 3
3 4
4 5
6 7
7 8
8 9
9 10
```

```output3
12
```