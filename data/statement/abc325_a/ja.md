配点 : $100$ 点

## 問題文

キーエンスでは、役割や年齢、立場の違いに関係なく「さん」付けして呼ぶという文化があります。
新入社員が社長を呼ぶときも「中田さん」と呼びます。

ある人の苗字と名前がそれぞれ文字列 $S,T$ として与えられます。

苗字、スペース（` `）、敬称（`san`）をこの順に連結した文字列を出力してください。

## 制約

- $S,T$ は以下の各条件を満たす文字列-   - 長さ $1$ 以上 $10$ 以下
-   - 先頭の文字は英大文字
-   - 先頭以外の文字は英小文字

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$ $T$

## 出力

苗字、スペース（` `）、敬称（`san`）をこの順に連結した文字列を出力せよ。

```input1
Takahashi Chokudai
```

```output1
Takahashi san
```

苗字（`Takahashi`）、スペース（` `）、敬称（`san`）をこの順に連結した文字列を出力します。

```input2
K Eyence
```

```output2
K san
```