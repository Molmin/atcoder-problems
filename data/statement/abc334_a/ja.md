配点 : $100$ 点

## 問題文

野球少年の高橋君は今年とても良い子にしていたので、サンタさんはバットかグローブのうち値段が高い方を高橋君にプレゼントすることにしました。

バットの値段が $B$ 円、グローブの値段が $G$ 円 ($B\neq G$) のとき、サンタさんが高橋君にプレゼントするのはどちらですか？

## 制約

- $B,G$ は $1$ 以上 $1000$ 以下の相異なる整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $B$ $G$

## 出力

サンタさんが高橋君にプレゼントするのがバットであるとき `Bat` を、グローブであるとき `Glove` を出力せよ。

```input1
300 100
```

```output1
Bat
```

バットの方がグローブより値段が高いので、サンタさんは高橋君にバットをプレゼントします。

```input2
334 343
```

```output2
Glove
```

グローブの方がバットより値段が高いので、サンタさんは高橋君にグローブをプレゼントします。