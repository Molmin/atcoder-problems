配点 : $200$ 点

## 問題文

英小文字からなる文字列 $S$ が与えられます．
$S$ に現れない英小文字であって，最も辞書順（アルファベット順）で小さいものを求めてください．
ただし，$S$ にすべての英小文字が現れる場合は，代わりに `None` を出力してください．

## 制約

- $1 \leq |S| \leq 10^5$ ($|S|$ は文字列 $S$ の長さ)
- $S$ は英小文字のみからなる．

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S$ に現れない英小文字であって，最も辞書順で小さいものを出力せよ．
ただし，$S$ にすべての英小文字が現れる場合は，代わりに `None` を出力せよ．

```input1
atcoderregularcontest
```

```output1
b
```

`atcoderregularcontest` という文字列には `a` は現れますが `b` は現れません．

```input2
abcdefghijklmnopqrstuvwxyz
```

```output2
None
```

この文字列には，すべての英小文字が現れます．

```input3
fajsonlslfepbjtsaayxbymeskptcumtwrmkkinjxnnucagfrg
```

```output3
d
```