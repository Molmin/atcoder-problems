配点 : $300$ 点

## 問題文

$T$ 個のテストケースについて、次の問題に答えてください。

グルメレビューサイトである EatCocoder では、レストランに $1$ 以上 $5$ 以下の整数個の星を付けてレビューすることができます。<br>
最初、B料理長の経営するレストランには、星 $i$ のレビューが $A_i$ 件付いています。 $(1 \le i \le 5)$<br>
B料理長は EatCocoder の運営に $P_i$ 円の賄賂を渡すことで、星 $i$ のレビューを $1$ 件追加してもらえます。 $(1 \le i \le 5)$

賄賂によってレビューを全部で $k$ 件追加したとき、最終的なレビューは合計で $A_1+A_2+A_3+A_4+A_5+k$ 件になります。<br>
B料理長はこれらのレビューの平均評価を星 $3$ 以上にしたいと考えています。これを達成するために必要な賄賂の合計金額の最小値を求めてください。

## 制約

- 入力は全て整数
- $1 \le T \le 10^4$
- $0 \le A_i \le 10^8$
- $1 \le A_1+A_2+A_3+A_4+A_5$
- $1 \le P_i \le 10^8$

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$
> 
> $\rm{Case}_1$
> 
> $\rm{Case}_2$
> 
> $\vdots$
> 
> $\rm{Case}$$_T$

但し、 $\rm{Case}$$_i$ は $i$ 個目のテストケースを意味する。<br>
各テストケースは以下の形式で与えられる。

> $A_1$ $A_2$ $A_3$ $A_4$ $A_5$
> 
> $P_1$ $P_2$ $P_3$ $P_4$ $P_5$

## 出力

全体で $T$ 行出力せよ。<br>
そのうち $i$ 行目には、 $i$ 個目のテストケースに対する答えを整数として出力せよ。

```input1
6
1 0 1 0 0
1 2 3 4 5
0 2 2 0 0
1 1 1 1 5
0 1 2 0 0
1 1 1 5 3
1 1 1 0 0
1 1 1 1 1
0 0 0 0 1
1 1 1 1 1
100000000 100000000 100000000 0 0
100000000 100000000 100000000 100000000 100000000
```

```output1
5
2
3
2
0
15000000000000000
```

この入力には $6$ 個のテストケースが含まれています。

- $1$ 個目のテストケースについて、例えば以下のようにすると $5$ 円の賄賂で平均評価を星 $3$ 以上にでき、これが達成可能な最小値です。-   - 元々星 $1,2,3,4,5$ のレビューが $1,0,1,0,0$ 件付いています。
-   - $P_5 = 5$ 円の賄賂を渡し、星 $5$ のレビューを $1$ 件追加させます。
-   - その結果、星 $1,2,3,4,5$ のレビューが $1,0,1,0,1$ 件となり、これらの平均は星 $3$ です。
- $2$ 個目のテストケースについて、例えば以下のようにすると $2$ 円の賄賂で平均評価を星 $3$ 以上にでき、これが達成可能な最小値です。-   - 元々星 $1,2,3,4,5$ のレビューが $0,2,2,0,0$ 件付いています。
-   - $P_4 \times 2 = 2$ 円の賄賂を渡し、星 $4$ のレビューを $2$ 件追加させます。
-   - その結果、星 $1,2,3,4,5$ のレビューが $0,2,2,2,0$ 件となり、これらの平均は星 $3$ です。
- $3$ 個目のテストケースについて、例えば以下のようにすると $3$ 円の賄賂で平均評価を星 $3$ 以上にでき、これが達成可能な最小値です。-   - 元々星 $1,2,3,4,5$ のレビューが $0,1,2,0,0$ 件付いています。
-   - $P_5 = 3$ 円の賄賂を渡し、星 $5$ のレビューを $1$ 件追加させます。
-   - その結果、星 $1,2,3,4,5$ のレビューが $0,1,2,0,1$ 件となり、これらの平均は星 $3.25$ です。
- $4$ 個目のテストケースについて、例えば以下のようにすると $2$ 円の賄賂で平均評価を星 $3$ 以上にでき、これが達成可能な最小値です。-   - 元々星 $1,2,3,4,5$ のレビューが $1,1,1,0,0$ 件付いています。
-   - $P_4 = 1$ 円の賄賂を渡し、星 $4$ のレビューを $1$ 件追加させます。
-   - $P_5 = 1$ 円の賄賂を渡し、星 $5$ のレビューを $1$ 件追加させます。
-   - その結果、星 $1,2,3,4,5$ のレビューが $1,1,1,1,1$ 件となり、これらの平均は星 $3$ です。
- $5$ 個目のテストケースについて、例えば以下のようにすると $0$ 円の賄賂で平均評価を星 $3$ 以上にでき、これが達成可能な最小値です。-   - 元々星 $1,2,3,4,5$ のレビューが $0,0,0,0,1$ 件付いています。
-   - これらの平均は星 $5$ でありこれは既に $3$ 以上であるため、賄賂を全く渡しません。
- $6$ 個目のテストケースについて、答えが $32$bit 符号付き整数に収まらないこともあります。