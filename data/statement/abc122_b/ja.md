配点 : $200$ 点

## 問題文

英大文字からなる文字列 $S$ が与えられます。$S$ の部分文字列 (注記を参照) であるような最も長い *ACGT 文字列* の長さを求めてください。

ここで、ACGT 文字列とは `A`, `C`, `G`, `T` 以外の文字を含まない文字列です。

## 注記

文字列 $T$ の部分文字列とは、$T$ の先頭と末尾から $0$ 文字以上を取り去って得られる文字列です。

例えば、`ATCODER` の部分文字列には `TCO`, `AT`, `CODER`, `ATCODER`, `` (空文字列) が含まれ、`AC` は含まれません。

## 制約

- $S$ は長さ $1$ 以上 $10$ 以下の文字列である。
- $S$ の各文字は英大文字である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S$ の部分文字列であるような最も長い ACGT 文字列の長さを出力せよ。

```input1
ATCODER
```

```output1
3
```

`ATCODER` の部分文字列であるような ACGT 文字列のうち、最も長いものは `ATC` です。

```input2
HATAGAYA
```

```output2
5
```

`HATAGAYA` の部分文字列であるような ACGT 文字列のうち、最も長いものは `ATAGA` です。

```input3
SHINJUKU
```

```output3
0
```

`SHINJUKU` の部分文字列であるような ACGT 文字列のうち、最も長いものは `` (空文字列) です。