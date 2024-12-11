配点 : $700$ 点

## 問題文

$N$ 個のコマが数直線上の整数座標に置かれています．$i$ 番目のコマは座標 $X_i$ に置かれています．

これらのコマを，次のように $M$ 回移動させます．

- $i$ 回目の操作では，正整数 $D_i$ が与えられ，各コマを次のように移動させる．-   - 座標が負の整数であるようなコマは，正の方向に距離 $D_i$ 進んだ位置に移動させる．
-   - 座標が $0$ であるようなコマは動かさない．
-   - 座標が正の整数であるようなコマは，負の方向に距離 $D_i$ 進んだ位置に移動させる．

各コマが原点に到達するか否かを判定してください．原点に到達する場合には，はじめて原点に到達するのが何回目の移動によるものかを出力してください．原点に到達しない場合には，$M$ 回の移動がすべて終了したときの座標を出力してください．

## 制約

- $1\leq N\leq 3\times 10^5$
- $1\leq M\leq 3\times 10^5$
- $1\leq X_1 &lt; \cdots &lt; X_N \leq 10^6$
- $1\leq D_i \leq 10^6$

## 入力

入力は以下の形式で標準入力から与えられます．

> $N$ $M$
> 
> $X_1$ $\ldots$ $X_N$
> 
> $D_1$ $\ldots$ $D_M$

## 出力

$N$ 行出力してください．$i$ 行目には，$i$ 番目のコマに対する答を，以下に述べる形式で出力してください．

コマが原点に到達する場合には，はじめて原点に到達するのが $x$ 回目の移動であるとして

> Yes $x$

と出力してください．コマが原点に到達しない場合には，$M$ 回の移動がすべて終了したときの座標が $x$ であるとして

> No $x$

と出力してください．

```input1
6 4
2 4 6 8 10 12
8 2 5 7
```

```output1
No -6
No -4
Yes 2
Yes 1
Yes 2
No 4
```

各コマの座標は次のように変化します．

- $1$ 番目のコマ：$\phantom{0}2\quad \longmapsto \quad -6\quad \longmapsto \quad -4\quad \longmapsto \quad \phantom{-}1 \quad \longmapsto \quad -6$.
- $2$ 番目のコマ：$\phantom{0}4 \quad \longmapsto \quad -4\quad \longmapsto \quad -2 \quad \longmapsto \quad \phantom{-}3 \quad \longmapsto \quad -4$.
- $3$ 番目のコマ：$\phantom{0}6 \quad \longmapsto \quad -2\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- $4$ 番目のコマ：$\phantom{0}8 \quad \longmapsto \quad \phantom{-}0\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- $5$ 番目のコマ：$10 \quad \longmapsto \quad \phantom{-}2\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- $6$ 番目のコマ：$12 \quad \longmapsto \quad \phantom{-}4\quad \longmapsto \quad \phantom{-}2 \quad \longmapsto \quad -3 \quad \longmapsto \quad \phantom{-}4$.