配点 : $400$ 点

## 問題文

$2 \times N$ のマス目があります．
すぬけ君は，このマス目に $N$ 個のドミノを，重ならないように敷き詰めました．
ここで，ドミノは，$1 \times 2$ または $2 \times 1$ のマス目を覆うことができます．

すぬけ君は，赤色，水色，緑色の $3$ 色を使って，これらのドミノを塗ることにしました．
このとき，辺で接しているドミノは異なる色で塗るようにします．
ここで，必ずしも $3$ 色すべてを使う必要はありません．

このような塗り方が何通りあるかを mod $1000000007$ で求めてください．

ただし，ドミノの敷き詰め方は，文字列 $S_1, S_2$ を用いて，次のようにして与えられます．

- 各ドミノは，それぞれ異なる英小文字または英大文字で表される．
- $S_i$ の $j$ 文字目は，マス目の上から $i$ 番目，左から $j$ 番目のマスにどのドミノがあるかを表す．

## 制約

- $1 \leq N \leq 52$
- $|S_1| = |S_2| = N$
- $S_1, S_2$ は英小文字または英大文字からなる
- $S_1, S_2$ は正しいドミノの敷き詰め方を表している

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$

## 出力

ドミノを塗る方法の数を mod $1000000007$ で出力せよ．

```input1
3
aab
ccb
```

```output1
6
```

次の $6$ 通りあります．

![](https://atcoder.jp/img/arc081/899673bd23529f4fb5e41c6e7d5bc372.png)

```input2
1
Z
Z
```

```output2
3
```

必ずしもすべての色を使わなくてもよいことに注意してください．

```input3
52
RvvttdWIyyPPQFFZZssffEEkkaSSDKqcibbeYrhAljCCGGJppHHn
RLLwwdWIxxNNQUUXXVVMMooBBaggDKqcimmeYrhAljOOTTJuuzzn
```

```output3
958681902
```