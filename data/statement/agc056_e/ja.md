配点 : $1600$ 点

## 問題文

長さ $N$ の円周があります．
円周上のある決まった点から距離 $x$ だけ時計回りに進んだ点を，座標 $x$ の点と呼ぶことにします．

各整数 $i$ ($0 \leq i \leq N-1$) について，座標 $i+0.5$ に一匹のネズミがいます．

すぬけくんは今から，$N-1$ 回チーズを投げます．
具体的には，以下のような操作を $N-1$ 回繰り返します．

- 整数 $y$ ($0 \leq y \leq N-1$)をランダムに選ぶ．
ただし，$y=i$ となる確率は $A_i$% である．
この選択は毎回独立である．
- その後，座標 $y$ からチーズを投げる．
チーズは，円周上を時計回りに移動する．
ネズミのいる位置をチーズが通る時，以下のことが起こる．-   - そのネズミが今までにチーズを食べていない場合：-   -   - $1/2$ の確率でチーズを食べる．食べられたチーズは消失する．
-   -   - $1/2$ の確率でなにもしない．
-   - そのネズミが今までにチーズを食べたことがある場合：-   -   - なにもしない．
- チーズは，いずれかのネズミに食べられるまで，円周上を回り続ける．

$N-1$ 回チーズを投げたあと，ちょうど $1$ 匹だけ，チーズを食べていないネズミがいます．
各 $k=0,1,\cdots,N-1$ について，座標 $k+0.5$ にいるネズミが最終的にチーズを食べていない確率を $\bmod\ 998244353$ で求めてください．

確率 $\bmod\ 998244353$ の定義

求める確率は必ず有理数になることが証明できます。 また、この問題の制約のもとでは、その値を既約分数 $\frac{P}{Q}$ で表した時、$Q \neq 0 \pmod{998244353}$ となることも証明できます。 よって、$R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$ を満たす整数 $R$ が一意に定まります。 この $R$ を答えてください。

## 制約

- $1 \leq N \leq 40$
- $0 \leq A_i$
- $\sum_{0 \leq i \leq N-1} A_i = 100$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_0$ $A_1$ $\cdots$ $A_{N-1}$

## 出力

各 $k=0,1,\cdots,N-1$ に対する答えを，空白区切りで一行に出力せよ．

```input1
2
0 100
```

```output1
665496236 332748118
```

必ず $y=1$ が選択されます．ここからチーズを投げた時，以下のことが起こります．

- $1/2$ の確率で，座標 $1.5$ のネズミがチーズを食べる．
- $1/4$ の確率で，座標 $0.5$ のネズミがチーズを食べる．
- $1/8$ の確率で，座標 $1.5$ のネズミがチーズを食べる．
- $1/16$ の確率で，座標 $0.5$ のネズミがチーズを食べる．
- $\vdots$

結局，このチーズを座標 $0.5,1.5$ のネズミが食べる確率は，それぞれ $1/3,2/3$ です．

よって，最終的にチーズを食べていない確率は，それぞれ $2/3,1/3$ になります．

```input2
2
50 50
```

```output2
499122177 499122177
```

```input3
10
1 2 3 4 5 6 7 8 9 55
```

```output3
333507001 91405664 419217284 757959653 974851434 806873643 112668439 378659755 979030842 137048051
```