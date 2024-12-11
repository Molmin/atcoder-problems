配点 : $400$ 点

## 問題文

高橋君と青木君が選挙で戦っています。<br>
選挙区は $N$ 個あります。$i$ 番目の選挙区には $X_i + Y_i$ 人の有権者がいて、そのうち $X_i$ 人が高橋派、$Y_i$ 人が青木派です。($X_i + Y_i$ はすべて奇数です)<br>
それぞれの区では、多数派がその区の $Z_i$ 議席を全て獲得します。そして、$N$ 個の選挙区全体として過半数の議席を獲得した方が選挙に勝利します。($\displaystyle \sum_{i=1}^N Z_i$ は奇数です)<br>
高橋君が選挙で勝利するには最低で何人を青木派から高橋派に鞍替えさせる必要がありますか？

## 制約

- $1 \leq N \leq 100$
- $0 \leq X_i, Y_i \leq 10^9$
- $X_i + Y_i$ は奇数
- $1 \leq Z_i$
- $\displaystyle \sum_{i=1}^N Z_i \leq 10^5$
- $\displaystyle \sum_{i=1}^N Z_i$ は奇数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $X_1$ $Y_1$ $Z_1$
> 
> $X_2$ $Y_2$ $Z_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$ $Z_N$

## 出力

答えを出力せよ。

```input1
1
3 8 1
```

```output1
3
```

選挙区が $1$ 個しかないので、$1$ 番目の選挙区で議席を獲得した人が選挙に勝利します。<br>
$1$ 番目の選挙区の青木派 $3$ 人を高橋派に鞍替えさせると、$1$ 番目の選挙区にいる有権者のうち高橋派は $6$ 人、青木派は $5$ 人になり、高橋君は議席を獲得できます。

```input2
2
3 6 2
1 8 5
```

```output2
4
```

$1$ 番目の選挙区の議席数よりも $2$ 番目の選挙区の議席数の方が多いため、高橋君が選挙に勝つには $2$ 番目の選挙区で高橋派を多数派にする必要があります。<br>
$2$ 番目の選挙区の青木派の $4$ 人を鞍替えさせると高橋君は $5$ 議席を獲得できます。このとき青木君の獲得する議席は $2$ 議席なので、高橋君は選挙に勝利できます。

```input3
3
3 4 2
1 2 3
7 2 6
```

```output3
0
```

青木派から高橋派に鞍替えする人が $0$ 人でも高橋君が選挙で勝つ場合は $0$ 人が答えになります。

```input4
10
1878 2089 16
1982 1769 13
2148 1601 14
2189 2362 15
2268 2279 16
2394 2841 18
2926 2971 20
3091 2146 20
3878 4685 38
4504 4617 29
```

```output4
86
```