配点 : $300$ 点

## 問題文

`A`, `B` からなる長さ $N+1$ の文字列 $S = S_0\cdots S_N$ が与えられます．
各 $k=1, \ldots, N$ に対して次の問題を解いてください：

Alice と Bob が集合 $X$ を使ってゲームをします．$X$ ははじめ空集合で，$t=1,\ldots, k$ の順に次の行動を行います．

- $t$ が奇数ならば，Alice が非負整数 $x$ を選び，$X$ を $X\cup \{x\}$ に置き換える．
- $t$ が偶数ならば，Bob が非負整数 $x$ を選び，$X$ を $X\cup \{x\}$ に置き換える．

$k$ 回すべての行動が終わった時点での $\mathrm{mex}(X)$ を $x$ とするとき，文字 $S_x$ が `A` ならば Alice が，$S_x$ が `B` ならば Bob が勝者となります．集合 $X$ の要素数は $k$ 以下であるため，$x = \mathrm{mex}(X) \leq k$ が成り立つ（したがって文字 $S_x$ が存在する）ことに注意してください．

両者が最適に行動した場合の勝者の名前を出力してください．

  $\mathrm{mex}(X)$ とは？
非負整数からなる有限集合 $X$ に対し，$x\notin X$ を満たす最小の非負整数 $x$ を $\mathrm{mex}(X)$ と定義します．

## 制約

- $1\leq N\leq 2\times 10^5$
- $S$ は `A`, `B` からなる長さ $N+1$ の文字列である．

## 入力

入力は以下の形式で標準入力から与えられます．

> $N$
> 
> $S$

## 出力

$N$ 行出力してください．$i$ 行目には，$k=i$ とした場合のゲームについて，両者が最適に行動した場合の勝者の名前（`Alice` または `Bob`）を出力してください．

```input1
2
ABB
```

```output1
Alice
Bob
```

$k=1$ とした場合のゲームの進行例の一例を次に示します．

- Alice が $x=10$ を選ぶ．
- $\mathrm{mex}(X)=\mathrm{mex}(\lbrace 10\rbrace) = 0$ であり，$S_0$ は `A` なので，Alice が勝利する．

$k=2$ とした場合のゲームの進行例の一例を次に示します．

- Alice が $x=2$ を選ぶ．
- Bob が $x=0$ を選ぶ．
- $\mathrm{mex}(X)=\mathrm{mex}(\lbrace 0,2\rbrace) = 1$ であり，$S_1$ は `B` なので，Bob が勝利する．

```input2
4
AAAAA
```

```output2
Alice
Alice
Alice
Alice
```

```input3
7
BBAABABA
```

```output3
Bob
Bob
Alice
Bob
Alice
Bob
Alice
```