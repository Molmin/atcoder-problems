配点 : $500$ 点

## 問題文

整数 $N,L$ が与えられます．
以下の条件をすべて満たす $3N$ 個の文字列の組 $(S_1,S_2,\cdots,S_{3N})$ を一つ求めてください．

- <p>$S_i$ は `0`, `1`, `2` からなる長さ $L$ の文字列である．</p>
- <p>$S_i$ はすべて互いに異なる．</p>
- <p>すべての $j$ ($1 \leq j \leq L$) および $c=$`0`, `1`, `2` について，次が成り立つ．</p>
-   - $S_i$ のうち，$j$ 文字目が $c$ であるようなものはちょうど $N$ 個存在する．
- <p>$S_1,S_2,\cdots,S_{3N}$ の中で，辞書順で最も大きい文字列を $t$ で表すことにする．
このときの $t$ は，$t$ としてありうる文字列の中で辞書順最小の文字列である．</p>

## 制約

- $1 \leq N \leq 5 \times 10^4$
- $1 \leq L \leq 15$
- $3N \leq 3^L$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $L$

## 出力

以下の形式で答えを出力せよ．

> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_{3N}$

なお，条件を満たす解が複数存在する場合，どれを出力しても正解とみなされる．

```input1
2 2
```

```output1
00
02
11
12
20
21
```

この出力例はすべての条件を満たしています．

例えば，$2$ 文字目が `0` であるような文字列は $2$ 個存在しています．

また，この例では $t=$`21` ですが，$t$ がこれより辞書順で小さくなることはありません．