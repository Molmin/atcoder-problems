配点 : $400$ 点

## 問題文

$1$ から $N$ までの番号のついた $N$ 頂点からなる有向グラフがあります．
このグラフの辺は，$N$ 個の長さ $N$ の文字列 $S_1,S_2,\ldots,S_N$ によって表されます．
具体的には，頂点 $i$ から頂点 $j$ に向かう辺が存在する場合は $S_{i,j}=$`1` で，
そうでない場合は $S_{i,j}=$`0` です．
このグラフに自己ループや多重辺はありません．

クマの AtCobear くんが，以下の操作をグラフが空になるまで繰り返します．

- (まだ削除されていない) グラフの頂点を一様ランダムに $1$ つ選ぶ（このランダムな選択は，今までの選択とは独立である）．
そして，その頂点，およびその頂点からいくつかの辺をたどることで到達可能なすべての頂点を，削除する．
削除された頂点に接続する辺も，すべて削除される．

操作回数の期待値を求めてください．

## 制約

- $1 \leq N \leq 100$
- $S_i$ は `0`,`1` からなる長さ $N$ の文字列．
- $S_{i,i}=$`0`

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

操作回数の期待値を出力せよ．
絶対誤差または相対誤差が $10^{-9}$ 以下ならば，正解と判定される．

```input1
3
010
001
010
```

```output1
1.66666666666666666667
```

以下の $3$ つのシナリオが等確率で起こります．

- <p>最初の操作で頂点 $1$ を選び，頂点 $1,2,3$ が削除される．
グラフが空になったので操作を終了する．</p>
- <p>最初の操作で頂点 $2$ を選び，頂点 $2,3$ が削除される．
次の操作で，頂点 $1$ を選び，頂点 $1$ が削除される．
グラフが空になったので操作を終了する．</p>
- <p>最初の操作で頂点 $3$ を選び，頂点 $2,3$ が削除される．
次の操作で，頂点 $1$ を選び，頂点 $1$ が削除される．
グラフが空になったので操作を終了する．</p>

よって操作回数の期待値は，$(1+2+2)/3=5/3$ になります．

```input2
3
000
000
000
```

```output2
3.00000000000000000000
```

必ず $3$ 回の操作を行います．

```input3
3
011
101
110
```

```output3
1.00000000000000000000
```

必ず $1$ 回の操作を行います．