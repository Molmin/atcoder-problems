配点 : $1800$ 点

## 問題文

すぬけ君は $X+Y$ 個のボールを持っています．
このうち $X$ 個には整数 $A$ が，残りの $Y$ 個には整数 $B$ が書かれています．

すぬけ君は，これらのボールをいくつかのグループに分けます．
このとき，どのボールもちょうど $1$ つのグループに含まれ，またどのグループも $1$ つ以上のボールを含むようにします．

ここで，あるグループが**よい**グループであるとは，グループ内のボールに書かれている整数の総和が整数 $C$ の整数倍であることを意味します．
よいグループの個数の最大値を求めてください．

$1$ つの入力につき，$T$ 個のテストケースに答えてください．

## 制約

- $1 \leq T \leq 2 \times 10^4$
- $1 \leq A,X,B,Y,C \leq 10^9$
- $A \neq B$

## 入力

入力は以下の形式で標準入力から与えられる．
入力の $1$ 行目は以下のとおりである．

> $T$

そして，$T$ 個のテストケースが続く．
これらはそれぞれ以下の形式で与えられる．

> $A$ $X$ $B$ $Y$ $C$

## 出力

各テストケースについて，よいグループの個数の最大値を出力せよ．
各テストケースごとに改行せよ．

```input1
3
3 3 4 4 5
2 1 1 5 3
3 1 4 2 5
```

```output1
2
2
0
```

$1$ つ目のテストケースでは，$\{3,3,4\},\{3,4,4,4\}$ とグループ分けすれば，よいグループの個数が $2$ になります．

$2$ つ目のテストケースでは，$\{2,1\},\{1,1,1\},\{1\}$ とグループ分けすれば，よいグループの個数が $2$ になります．