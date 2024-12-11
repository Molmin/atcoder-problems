配点 : $900$ 点

## 問題文

Aliceは数直線の上に住んでいます。今日はある不思議な乗り物に乗って目的地まで行くことを考えました。
はじめ、Aliceは目的地から $D$ 離れたところにいます。Aliceが乗り物にある数 $x$ を入力すると、現在地から目的地に向かって $x$ 進んだところが現在地より目的地に近いとき移動し、そうでないときは動きません。現在地から目的地までの距離が $x$ 未満のとき、$x$ 進んだところは目的地を通りすぎていることに注意してください。また、目的地を通り過ぎると進行方向が変わること、進行方向は何度も変わることがあることに注意してください。

Aliceは乗り物に $N$ 回だけ数を入力し、$i$ 番目に入力する数は $d_i$ の予定でした。Aliceは入力する予定数の書かれたリストを作っておき、その数を $1$ つずつ入力します。

しかしイタズラ好きの魔法使いが現れ、Aliceが $N$ 回の入力による移動を終えても目的地にたどり着かないよう、リストの数を $1$ つだけ書き換えることを考えました。

魔法使いはイタズラの実行のため以下の $Q$ 個の計画を考えています。

- $q_i$ 回目に入力する数のみをある正整数に変更することで、Aliceが目的地にたどり着かないようにする

$Q$ 個の計画それぞれが実行可能であるか答えるプログラムを書いてください。

## 制約

- $1 \leq N \leq 5*10^5$
- $1 \leq Q \leq 5*10^5$
- $1 \leq D \leq 10^9$
- $1 \leq d_i \leq 10^9(1 \leq i \leq N)$
- $1 \leq q_i \leq N(1 \leq i \leq Q)$
- $d_i, D$は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $D$
> 
> $d_1$ $d_2$ $...$ $d_N$
> 
> $Q$
> 
> $q_1$ $q_2$ $...$ $q_Q$

## 出力

$i$ 番目の計画が実行可能なら`YES`、そうでないなら`NO`と $i$ 行目に出力せよ。

```input1
4 10
3 4 3 3
2
4 3
```

```output1
NO
YES
```

$3$ 番目までの入力でAliceはすでに目的地にたどり着いているため、$1$ 番目の計画の答えは`NO`です。

例えば、$3$ 番目の入力を $5$ にすると、Aliceは以下のような移動をし、目的地にたどり着くことはできないため、$2$ 番目の計画の答えは`YES`です。

![](https://atcoder.jp/img/arc072/f6a4307ef86847bc8fa68d0952f7127c.png)

```input2
5 9
4 4 2 3 2
5
1 4 2 3 5
```

```output2
YES
YES
YES
YES
YES
```

もともと入力する予定のままでもAliceは目的地にたどり着けないため、すべての計画は実行可能です。

```input3
6 15
4 3 5 4 2 1
6
1 2 3 4 5 6
```

```output3
NO
NO
YES
NO
NO
YES
```