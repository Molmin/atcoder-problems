配点 : $100$ 点

## 問題文

縦 $2$ マス、横 $3$ マスのマス目が与えられます。上から $i$ 行目、左から $j$ 行目のマスの色は、$C_{ij}$ で表されます。

このマス目を $180$ 度回転させたとき、元のマス目と一致するなら `YES` を、そうでないなら `NO` を出力するプログラムを作成してください。

## 制約

- $C_{ij}(1 \leq i \leq 2, 1 \leq j \leq 3)$ は英小文字である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $C_{11}C_{12}C_{13}$
> 
> $C_{21}C_{22}C_{23}$

## 出力

マス目を $180$ 度回転させたとき、元のマス目と一致するなら `YES` を、そうでないなら `NO` を出力せよ。

```input1
pot
top
```

```output1
YES
```

マス目を $180$ 度回転させると、元のマス目と一致します。

```input2
tab
bet
```

```output2
NO
```

マス目を $180$ 度回転させても、元のマス目と一致しません。

```input3
eye
eel
```

```output3
NO
```