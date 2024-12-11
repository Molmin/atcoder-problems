配点 : $600$ 点

## 問題文

文字列 $S$ に対して，その文字列を構成する文字を $0$ 文字以上取り除き，残った文字を元の順番で並べて得られる文字列を $S$ の部分列と呼びます．
たとえば，`arc` や `artistic` や (空文字列) は `artistic` の部分列ですが，`abc` や `ci` は `artistic` の部分列ではありません．

英小文字からなる文字列 $A$ が与えられます．
このとき，英小文字からなる文字列で，$A$ の部分列ではないようなもののうち，最も短いものを求めてください．
ただし，そのようなものが複数ある場合には，辞書順で最小のものを求めてください．

## 制約

- $1 \leq |A| \leq 2 \times 10^5$
- $A$ は英小文字のみからなる．

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$

## 出力

英小文字からなる $A$ の部分列でないような最短の文字列のうち，辞書順最小のものを出力せよ．

```input1
atcoderregularcontest
```

```output1
b
```

`atcoderregularcontest` という文字列は `a` を部分列として含みますが，`b` は含みません．

```input2
abcdefghijklmnopqrstuvwxyz
```

```output2
aa
```

```input3
frqnvhydscshfcgdemurlfrutcpzhopfotpifgepnqjxupnskapziurswqazdwnwbgdhyktfyhqqxpoidfhjdakoxraiedxskywuepzfniuyskxiyjpjlxuqnfgmnjcvtlpnclfkpervxmdbvrbrdn
```

```output3
aca
```