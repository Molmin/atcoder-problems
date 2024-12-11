配点 : $100$ 点

## 問題文

イルカは、新年に長さ $19$ の文字列 $s$ を受け取りました。<br>
文字列 $s$ の形式は `[英小文字 $5$ 文字],[英小文字 $7$ 文字],[英小文字 $5$ 文字]` で表されます。<br>
イルカは、カンマで区切られた文字列 $s$ を、スペースで区切られた文字列に変換したいと思っています。<br>
イルカの代わりに、この処理を行うプログラムを作ってください。  

## 制約

- $s$ の長さは $19$ である。
- $s$ の $6$ 文字目と $14$ 文字目は `,` である。
- それら以外の $s$ の文字は英小文字である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $s$

## 出力

処理した後の文字列を出力せよ。

```input1
happy,newyear,enjoy
```

```output1
happy newyear enjoy
```

`happy,newyear,enjoy` に含まれるカンマをスペースで置き換えて、`happy newyear enjoy` を出力します。

```input2
haiku,atcoder,tasks
```

```output2
haiku atcoder tasks
```

```input3
abcde,fghihgf,edcba
```

```output3
abcde fghihgf edcba
```