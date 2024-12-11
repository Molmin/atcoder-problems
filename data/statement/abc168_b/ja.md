配点: $200$ 点

## 問題文

英小文字からなる文字列 $S$ があります。

$S$ の長さが $K$ 以下であれば、$S$ をそのまま出力してください。

$S$ の長さが $K$ を上回っているならば、先頭 $K$ 文字だけを切り出し、末尾に `...` を付加して出力してください。

## 制約

- $K$ は $1$ 以上 $100$ 以下の整数
- $S$ は英小文字からなる文字列
- $S$ の長さは $1$ 以上 $100$ 以下

## 入力

入力は以下の形式で標準入力から与えられる。

> $K$
> 
> $S$

## 出力

問題文の通りに出力せよ。

```input1
7
nikoandsolstice
```

```output1
nikoand...
```

`nikoandsolstice` の長さは $15$ であり、$K=7$ を上回っています。

この先頭 $7$ 文字を切り出して末尾に `...` を付加した文字列 `nikoand...` を出力します。

```input2
40
ferelibenterhominesidquodvoluntcredunt
```

```output2
ferelibenterhominesidquodvoluntcredunt
```

ガイウス・ユリウス・カエサルの名言です。