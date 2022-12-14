import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import Container from './presentation/view-implementations/Container';
import { ContentContainer } from './presentation/view-implementations/ContentContainer';
import userEvent from '@testing-library/user-event';
import { Title } from './domain/entity/models/const/Title';
import { allPostWithoutState } from './data/callAllPost';

//TESTED COMPONENT/VIEW: Container and Loading Page
test('tests the loading renders', () => {
  render(<App />);

  expect(screen.getByTestId('container')).toBeInTheDocument()
  expect(screen.getByTestId('loading-page')).toBeInTheDocument()
  expect(screen.queryByTestId("content-container")).not.toBeInTheDocument()
});

//TESTED COMPONENT/VIEW: Content-container and Title
test('test the content container render', async () => {
  render(<Container title={Title}/>)

  await waitFor (() => {
    expect(screen.getByTestId("content-container")).toBeInTheDocument()
  }).then(() => {
    expect(screen.getByText("SIMPLE NEWS")).toBeInTheDocument()
  })
})

//TESTED COMPONENT/VIEW: MappedView and CardMapped
test("test the mapped view and mapped card", async () => {

  const data = await allPostWithoutState()

  render(<ContentContainer data={data}/>)

  expect(screen.getByTestId("mapped-view")).toBeInTheDocument()
  expect(screen.getByTestId("card-mapped0")).toBeInTheDocument()
})

//TESTED COMPONENT/VIEW: PageView
test("testing clicking the card leads to page view", async () => {
  const data = await allPostWithoutState()

  render(<ContentContainer data={data}/>)

  userEvent.click(screen.getByTestId("card-mapped0"))

  await waitFor (() => {
    expect(screen.getByTestId("page-view0")).toBeInTheDocument()
  })
})

//TESTED COMPONENT/VIEW: KembaliButton
test("testing clicking the kembali-button ", async () => {
  const data = await allPostWithoutState()

  render(<ContentContainer data={data}/>)

  userEvent.click(screen.getByTestId("card-mapped0"))

  await waitFor (() => {
    expect(screen.getByTestId("page-view0")).toBeInTheDocument()
  })

  userEvent.click(screen.getByTestId("kembali-button"))

  await waitFor(() => {
    expect(screen.findByTestId("card-mapped0"))
  })

})

