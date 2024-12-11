配点 : $400$ 点

## 問題文

高橋くんはレストランで、 $N$ 品からなる奇妙なフルコースを楽しむことにしました。<br>
このコースのうち $i$ 番目の料理は以下の通りです。

- $X_i=0$ の場合、美味しさが $Y_i$ の **解毒剤入り** の料理
- $X_i=1$ の場合、美味しさが $Y_i$ の **毒入り** の料理

高橋くんが料理を食べると、高橋くんの状態は以下のように変化します。  

- 最初、高橋くんはお腹を壊していない。
- 高橋くんが **お腹を壊していない** 時、-   - **解毒剤入り** の料理を食べても、高橋くんは **お腹を壊していないまま** である。
-   - **毒入り** の料理を食べると、高橋くんは **お腹を壊す** 。
- 高橋くんが **お腹を壊している** 時、-   - **解毒剤入り** の料理を食べると、高橋くんは **お腹を壊していない状態になる** 。
-   - **毒入り** の料理を食べると、高橋くんは **死ぬ** 。

コースは以下の流れで進行します。

- $i = 1, \ldots, N$ についてこの順に、以下の処理を繰り返す。-   - まず、 $i$ 番目の料理が高橋くんに提供される。
-   - 次に、 高橋くんはこの料理に対し「食べる」か「下げてもらう」かを選択する。-   -   - 「食べる」を選択した場合、高橋くんは $i$ 番目の料理を食べる。食べた料理に応じて高橋くんの状態も変化する。
-   -   - 「下げてもらう」を選択した場合、高橋くんは $i$ 番目の料理を食べない。この料理を後で提供してもらったり何らかの手段で保存したりすることはできない。
-   - 最後に、 (状態が変化するなら変化後の時点で) 高橋くんが死んでいない場合、-   -   - $i \neq N$ なら次の料理に進む。
-   -   - $i = N$ なら高橋くんは生きて退店する。

高橋くんはこのあと重要な仕事があるため、高橋くんは生きて退店しなければなりません。<br>
この条件の下で高橋くんが各料理に対し「食べる」「下げてもらう」を選択したとき、高橋くんが **食べた料理の美味しさの総和として考えられる最大値** ( 但し、何も食べなかった場合は $0$ ) を出力してください。

## 制約

- 入力は全て整数
- $1 \le N \le 3 \times 10^5$
- $X_i \in \{0,1\}$-   - つまり、 $X_i$ は $0,1$ のどちらかである。
- $-10^9 \le Y_i \le 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## 出力

答えを整数として出力せよ。

```input1
5
1 100
1 300
0 -200
1 500
1 300
```

```output1
600
```

以下のように選択することで食べた料理の美味しさの総和を $600$ にでき、これが考えられる最大値です。

- $1$ 番目の料理を下げてもらう。高橋くんはお腹を壊していません。
- $2$ 番目の料理を食べる。高橋くんはお腹を壊し、食べた料理の美味しさの総和は $300$ となります。
- $3$ 番目の料理を食べる。高橋くんはお腹を壊していない状態に戻り、食べた料理の美味しさの総和は $100$ となります。
- $4$ 番目の料理を食べる。高橋くんはお腹を壊し、食べた料理の美味しさの総和は $600$ となります。
- $5$ 番目の料理を下げてもらう。高橋くんはお腹を壊しています。
- 最終的に高橋くんは死んでいないので、高橋くんは生きて退店する。

```input2
4
0 -1
1 -2
0 -3
1 -4
```

```output2
0
```

この入力の場合何も食べないことが最善ですが、この場合答えは $0$ となります。

```input3
15
1 900000000
0 600000000
1 -300000000
0 -700000000
1 200000000
1 300000000
0 -600000000
1 -900000000
1 600000000
1 -100000000
1 -400000000
0 900000000
0 200000000
1 -500000000
1 900000000
```

```output3
4100000000
```

答えが $32$ bit 符号付き整数に収まらない可能性があります。