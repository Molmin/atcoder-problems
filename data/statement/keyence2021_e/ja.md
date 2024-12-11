配点 : $700$ 点

## 問題文

数直線上に $N$ 個の飴があります。左から $i$ 番目の飴は位置 $2i$ にあり、美味しさ $a_i$ の飴です。
ここで、飴の美味しさは相異なることが保証されます。

すぬけ君と蟻が交互に飴を一つずつ取り合うことにしました。
はじめに蟻が位置 $1,3,\ldots, 2N+1$ の一つを選んでそこに立ち、取り合いを開始します。

すぬけ君が先に飴を取ります。
すぬけ君は、自分の手番において好きな飴を一つ選んで取ることができます。

蟻は、自分の手番において、自分がいる位置から左右それぞれの方向について最も近い位置にある飴のうち、美味しさが大きい方を選んで取ります。一方向にしか飴が存在しない場合は、その方向にある最も近い位置にある飴を取ります。

飴がなくなった時点で取り合いは終了します。
蟻がはじめに立つ位置が $1, 3, \ldots, 2N+1$ の場合のそれぞれについて、すぬけ君が取る飴の美味しさの総和としてありうる値の最大値を求めてください。

## 制約

- 与えられる入力は全て整数
- $1 \leq N \leq 400$
- $1 \leq a_i \leq 10^{6}$
- $a_i$ は相異なる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## 出力

$N+1$ 行出力せよ。$i$ 行目では、蟻がはじめに位置 $2i-1$ に立ったときに、すぬけ君が取る飴の美味しさの総和としてありうる値の最大値を出力すること。

```input1
7
4 3 1 2 1000 2000 3000
```

```output1
6004
6004
6004
6001
5007
4007
4007
4007
```

- 蟻がはじめに位置 $7$ に立ったときのすぬけ君の最適な戦略の一例について説明します。-   - すぬけ君は美味しさ $1$ の飴を取ります。
-   - 蟻の左方向にある蟻に最も近い飴は美味しさ $3$ の飴です。蟻の右方向にある蟻に最も近い飴は美味しさ $2$ の飴です。蟻は美味しさが大きい方である美味しさ $3$ の飴を取ります。
-   - すぬけ君は美味しさ $1000$ の飴を取ります。
-   - 蟻の左方向にある蟻に最も近い飴は美味しさ $4$ の飴です。蟻の右方向にある蟻に最も近い飴は美味しさ $2$ の飴です。蟻は美味しさが大きい方である美味しさ $4$ の飴を取ります。
-   - すぬけ君は美味しさ $2000$ の飴を取ります。
-   - 蟻の左方向にある蟻に最も近い飴は存在しません。蟻の右方向にある蟻に最も近い飴は美味しさ $2$ の飴です。蟻は美味しさ $2$ の飴を取ります。
-   - すぬけ君は美味しさ $3000$ の飴を取ります。
-   - すぬけ君の取った飴の美味しさの総和は $6001$ です。これを超えるようなすぬけ君の飴の取り方は存在しません。

```input2
40
45651 92206 55173 24815 34809 73343 60978 57984 6919 89624 19693 30037 87070 6713 65976 37597 51929 93304 70911 7343 65414 38977 47998 52123 53590 35714 59319 50872 53850 40991 85668 8808 32846 70831 3416 42173 89538 73410 21502 69631
```

```output2
1416699
1416699
1416699
1416699
1413888
1410894
1410894
1410894
1413888
1413888
1413888
1413888
1413888
1413888
1419943
1419943
1419943
1400961
1400961
1400961
1419943
1419943
1419943
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419943
1419943
1419943
1419943
1398462
1398462
1398462
1402241
1402241
```