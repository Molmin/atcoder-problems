配点 : $500$ 点

## 問題文

高橋君は、あるパーティに特別ゲストとしてやってきました。
そこには一般ゲストが $N$ 人おり、一般ゲスト $i$ $(1 \leq i \leq N)$ の **パワー** は $A_i$ です。

高橋君は **握手** を $M$ 回行うことで、パーティ全体の **幸福度** を上げることにしました(握手開始前の幸福度を $0$ とします)。
握手は、以下の手順によって行われます。

- 高橋君が左手で手を握る (一般) ゲスト $x$ と右手で手を握るゲスト $y$ を決める (両手で同じゲストの手を握っても良い)。
- 高橋君が実際にこれら二本の手を握ることで、幸福度が $A_x+A_y$ 上がる。

ただし、全く同じ握手を二回以上行ってはいけません。厳密には、次の条件を満たす必要があります。

- $k$ 回目の握手で、左手でゲスト $x_k$ と、右手でゲスト $y_k$ と手を握ったとする。このとき、 $(x_p,y_p)=(x_q,y_q)$ を満たすような $p,q(1 \leq p &lt; q \leq M)$ が存在しない。

$M$ 回の握手を行った後、最終的な幸福度は最大でいくらにできるでしょうか。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq M \leq N^2$
- $1 \leq A_i \leq 10^5$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $...$ $A_N$

## 出力

$M$ 回の握手を行った後の最終的な幸福度の最大値を出力せよ。

```input1
5 3
10 14 19 34 33
```

```output1
202
```

例えば、

- $1$ 回目の握手で左手でゲスト $4$、右手でゲスト $4$ と握手し、
- $2$ 回目の握手で左手でゲスト $4$、右手でゲスト $5$ と握手し、
- $3$ 回目の握手で左手でゲスト $5$、右手でゲスト $4$ と握手する

ことで、幸福度を $(34+34)+(34+33)+(33+34)=202$ とすることができます。

幸福度を $203$ 以上にはできないので、答えは $202$ となります。

```input2
9 14
1 3 5 110 24 21 34 5 3
```

```output2
1837
```

```input3
9 73
67597 52981 5828 66249 75177 64141 40773 79105 16076
```

```output3
8128170
```