配点 : $100$ 点

## 問題文

長さ $N$ の英小文字からなる文字列 $S$ が与えられます。<br>
$S$ の $i$ 文字目を $S_i$ と記します。<br>
$S_1,S_1,S_2,S_2,\dots,S_N,S_N$ をこの順に連結した長さ $2N$ の文字列を出力してください。<br>
例えば、 $S$ が `beginner` のときは `bbeeggiinnnneerr` と出力してください。

## 制約

- $N$ は $1 \le N \le 50$ を満たす整数
- $S$ は長さ $N$ の英小文字からなる文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

答えを出力せよ。

```input1
8
beginner
```

```output1
bbeeggiinnnneerr
```

問題文中の例と同じです。

```input2
3
aaa
```

```output2
aaaaaa
```