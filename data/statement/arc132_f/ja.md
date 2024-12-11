配点 : $900$ 点

## 問題文

高橋くん、青木くん、すぬけくんの $3$ 人が、じゃんけんを $k$ 回するゲームで対戦します。

`P`, `R`, `S` からなる長さ $k$ の文字列を **作戦** と呼びます。ゲームは次のような流れで進行します。

- 参加者がそれぞれ作戦を選ぶ。
- じゃんけんを $k$ 回行う。$i$ 回目では、それぞれの参加者は、選んだ作戦の $i$ 文字目に応じた手を出す。具体的には、`P` であればパーを、`R` であればグーを、`S` であればチョキを出す。

青木くんは $n$ 個の作戦 $a_1,\dots,a_n$ のうち $1$ つを等確率でランダムに選びます。
すぬけくんは $m$ 個の作戦 $b_1,\dots,b_m$ のうち $1$ つを等確率でランダムに選びます。
ただし、$2$ 人の選び方は独立であるとします。

$k$ 回のじゃんけんのうち、高橋くん**だけ**が勝った回が $1$ 回でもあった場合、高橋くんは喜びます。
ありうる $3^k$ 通りの作戦それぞれについて、高橋くんがその作戦を選んだときに喜ぶ確率を求め、その $nm$ 倍を整数として出力してください（この値は整数となることが証明できます）。

## 注意

$3$ 人でじゃんけんをしたとき、高橋くんだけが勝つ場合は次の $3$ 通りです。

- 高橋くんがパーを出し、青木くんとすぬけくんがグーを出す
- 高橋くんがグーを出し、青木くんとすぬけくんがチョキを出す
- 高橋くんがチョキを出し、青木くんとすぬけくんがパーを出す

## 制約

- $1 \leq k \leq 12$
- $1 \leq n,m \leq 3^k$
- $a_i,b_i$ は `P`, `R`, `S` からなる長さ $k$ の文字列
- $a_1,\dots,a_n$ は相異なる
- $b_1,\dots,b_m$ は相異なる

## 入力

入力は以下の形式で標準入力から与えられる。

> $k$ $n$ $m$
> 
> $a_1$
> 
> $\vdots$
> 
> $a_n$
> 
> $b_1$
> 
> $\vdots$
> 
> $b_m$

## 出力

$3^k$ 個の値を出力せよ。$i$ 個目には、ありうる作戦のうち辞書順で $i$ 番目のものを高橋くんが選んだときの答えを出力せよ。

```input1
2 1 3
RS
RP
RR
RS
```

```output1
3
3
3
0
1
0
0
1
0
```

青木くんが選ぶ作戦は `RS` です。

すぬけくんが作戦として `RP` を選んだ場合、条件を満たす高橋くんの作戦は `PP`, `PR`, `PS` です。

すぬけくんが作戦として `RR` を選んだ場合、条件を満たす高橋くんの作戦は `PP`, `PR`, `PS` です。

すぬけくんが作戦として `RS` を選んだ場合、条件を満たす高橋くんの作戦は `PP`, `PR`, `PS`, `RR`, `SR` です。

以上より、高橋くんの作戦が `PP`, `PR`, `PS`, `RP`, `RR`, `RS`, `SP`, `SR`, `SS` であるときの確率はそれぞれ
$1,1,1,0,\frac 13,0,0,\frac 13,0$ です。
これらを $3$ 倍した値を出力してください。

```input2
3 5 4
RRP
SSS
RSR
PPP
RSS
PPS
SRP
SSP
RRS
```

```output2
4
7
7
6
9
10
4
7
8
4
8
7
4
8
8
3
7
7
3
7
6
4
8
8
1
5
5
```