配点: $300$ 点

## 問題文

AtCoder 商店では、以下の $6$ 種類の品物が $1000000$ 個ずつ売られています。  

- $1$ 個 $100$ 円のおにぎり
- $1$ 個 $101$ 円のサンドイッチ
- $1$ 個 $102$ 円のクッキー
- $1$ 個 $103$ 円のケーキ
- $1$ 個 $104$ 円の飴
- $1$ 個 $105$ 円のパソコン

高橋君は、合計価格がちょうど $X$ 円となるような買い物をしたいです。そのような買い方が存在するか判定してください。<br>
ただし、消費税は考えないものとします。  

## 制約

- $1 \leq X \leq 100000$
- $X$ は整数

## 入力

入力は以下の形式で標準入力から与えられます。  

> $X$

## 出力

合計値段がちょうど $X$ 円となるような買い物をすることが可能な場合は `1`、そうでない場合は `0` と出力してください。  

```input1
615
```

```output1
1
```

例えば、$6$ 種類の品物を $1$ 個ずつ買った場合、合計価格は $100+101+102+103+104+105=615$ 円となります。  

```input2
217
```

```output2
0
```

どのように品物を買っても、合計価格を $217$ 円にすることはできません。